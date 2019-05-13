const { ObjectId } = require('mongodb');
const dbInstance = require('./db');

module.exports = class Task {

    // constructor(label, completed) {
    //     this.label = label;
    //     this.completed = completed;
    // }

    constructor(task) {
        Object.assign(this, task);
    }

    async save() {
        const db = await dbInstance();
        if (!this._id) {
            return await db.collection('tasks').insertOne(this);
        }
        await db.collection('tasks')
            .updateOne(
                { _id: ObjectId(this._id) },
                {
                    $set: this
                }
            );
    }

    async delete() {
        if (this._id) {
            const db = await dbInstance();
            await db.collection('tasks').deleteOne({ _id: ObjectId(this._id) });
        }
    }

}