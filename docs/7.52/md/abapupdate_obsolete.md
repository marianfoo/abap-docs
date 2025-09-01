  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm) →  [Obsolete Short Forms in Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_obsolete.htm) → 

UPDATE dbtab - Short Form

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_shortref.htm)

Obsolete Syntax

UPDATE *{* dbtab *|* \*dbtab *}* ...

Effect

This statement is a short form of the following [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement for accessing an individual database table dbtab:

[UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm) dbtab FROM *{* dbtab *|* \*dbtab *}* ...

The explicit specification of a work area is missing in the short form. A [table work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm). If the name \*dbtab is used instead of the name of the database table dbtab, dbtab is accessed, but the [additional table work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables_asterisk.htm) is used.

Note

This short form is forbidden in classes and in the [strict mode of the syntax check from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm). Instead, use an explicit work area.