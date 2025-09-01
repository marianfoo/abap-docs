---
title: "SELECT - Short Form"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm) Obsolete Syntax SELECT SINGLE  FROM  dbtab  dbtab  ... ... ENDSELECT. Effect This statement is a short form of the following ABAP SQL(https://help.sap.com/doc/abapdocu_754_ind
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_obsolete.htm"
abapFile: "abapselect_obsolete.htm"
keywords: ["select", "do", "if", "try", "class", "data", "abapselect", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_obsolete.htm) →  [Obsolete ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql_obsolete.htm) →  [Obsolete Short Forms in ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_obsolete.htm) → 

SELECT - Short Form

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_shortref.htm)

Obsolete Syntax

SELECT *\[*SINGLE*\]* \* FROM *{* dbtab *|* \*dbtab *}* ...
  ...
ENDSELECT.

Effect

This statement is a short form of the following [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement for accessing an individual database table dbtab:

[SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) *\[* [SINGLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_single.htm)*\]* [\*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm)  [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) dbtab [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) *{* dbtab *|* \*dbtab *}* ...
  ...
[ENDSELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendselect.htm).

The explicit specification of a work area is not required in an [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause. A [table work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab or \*dbtab is used implicitly as the work area. The table work area must be declared using [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm). If the name \*dbtab is used instead of the name of the database table dbtab, dbtab is accessed, but the [additional table work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables_asterisk.htm) is used.

The short form can only be used to read all columns of a database table if \* is specified in the [SELECT list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_list.htm). When individual columns or aggregate functions are read, the work area must always be specified explicitly. The only exception here is when count( \* ) is used to specify "nothing", if no alias name has been defined and no GROUP BY clause has been specified.

Note

This short form is forbidden in classes and in the [strict mode of the syntax check from Release 7.40, SP05](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_740_sp05.htm). An explicit work area must be used instead.

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