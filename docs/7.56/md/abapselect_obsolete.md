  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_obsolete.htm) →  [Obsolete Short Forms in ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_short_forms_obsolete.htm) → 

SELECT, Short Form

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm)

Obsolete Syntax

SELECT *\[*SINGLE*\]* \* FROM *{* dbtab *|* \*dbtab *}* ...
  ...
ENDSELECT.

Effect

This statement is a short form of the following [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement for accessing an individual DDIC database table dbtab:

[SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) *\[* [SINGLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm)*\]* [\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm)  [FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) dbtab [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) *{* dbtab *|* \*dbtab *}* ...
  ...
[ENDSELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendselect.htm).

The explicit specification of a work area in an [INTO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm) clause is not required in the short form. A [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables.htm). If the name \*dbtab is used instead of the name of the DDIC database table dbtab, dbtab is accessed, but the [additional table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptables_asterisk.htm) is used.

The short form can only be used to read all columns of a database table if \* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm). When individual columns or aggregate functions are read, the work area must always be specified explicitly. The only exception is when count( \* ) is used to specify "nothing", if no alias name is defined for it and no GROUP BY clause is specified.

Hint

This short form is forbidden in classes and in the [strict mode of the syntax check from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_740_sp05.htm). An explicit work area must be used instead.

Bad Example

TABLES scarr.
SELECT \*
       FROM scarr.
  ...
ENDSELECT.

Good Example

DATA wa TYPE scarr.
SELECT \*
       FROM scarr
       INTO @wa.
  ...
ENDSELECT.

Good Example

SELECT \*
       FROM scarr
       INTO @DATA(wa).
  ...
ENDSELECT.