import type { IFieldSnapshot } from '@teable-group/core';
import { MultipleSelectFieldCore } from '@teable-group/core';
import type { Doc } from '@teable/sharedb/lib/client';
import type { Field } from './field';
import { FieldExtended } from './field';

export class MultipleSelectField extends MultipleSelectFieldCore implements Field {
  doc!: Doc<IFieldSnapshot>;

  async updateName(name: string) {
    return FieldExtended.updateName(this.doc, name, this.name);
  }

  async updateColumnWidth(viewId: string, width: number): Promise<void> {
    const oldWidth = this.columnMeta[viewId].width;
    return FieldExtended.updateColumnWidth(this.doc, viewId, width, oldWidth);
  }
}
