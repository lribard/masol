ds.startTransaction();
var ent = ds.DataClass1.find('ID = 1');
var stamp = ent.getStamp();
ent.attribute1 = ent.attribute1 + 'x';
ent.save();
ds.commit();

ent = ds.DataClass1.find('ID = 1');
var stamp2 = ent.getStamp();

