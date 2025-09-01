  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_obsolete.htm) →  [Obsolete Short Forms in ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_short_forms_obsolete.htm) → 

DELETE dbtab, Short Form

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab_shortref.htm)

Obsolete Syntax

DELETE *{* dbtab *|* \*dbtab *}* ...

Effect

This statement is a short form of the following [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement for accessing an individual database table dbtab:

[DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm) dbtab FROM *{* dbtab *|* \*dbtab *}* ... .

The explicit specification of a work area is missing in the short form. A [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm). If the name \*dbtab is used instead of the name of the database table dbtab, dbtab is accessed, but the [additional table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_asterisk.htm) is used.

Hint

This short form is forbidden in classes and in the [strict mode of the syntax check from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm). An explicit work area must be used instead.