  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_obsolete.htm) → 

REFRESH

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_shortref.htm)

Obsolete Syntax

REFRESH itab.

Effect

This statement deletes all rows in an internal table itab. This frees up the memory space required for the table, except for the initial memory requirement (see [INITIAL SIZE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_itab.htm)). itab expects an internal table.

The statement [FREE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_dataobject.htm) can be used to delete all rows and free all memory used by these rows.

Notes

-   The statement REFRESH itab has the same effect on internal tables as [CLEAR itab\[\]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm). If the internal table itab has a [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"), the [table body](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm "Glossary Entry") is initialized and not the header line.
    
-   If the internal table itab does not have a header line, REFRESH itab has the same effect as CLEAR itab. The use of tables with header lines is obsolete and forbidden in classes, which makes the use of REFRESH instead of CLEAR obsolete too. [CLEAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm) or [FREE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfree_dataobject.htm) can always be used to delete rows in internal tables.