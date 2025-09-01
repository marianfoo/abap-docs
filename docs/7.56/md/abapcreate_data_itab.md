---
title: "CREATE DATA, TABLE OF"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_area_handle.htm)  TYPE STANDARDSORTEDHASHED TABLE O
version: "7.56"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_itab.htm"
abapFile: "abapcreate_data_itab.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abapcreate", "itab"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data.htm) → 

CREATE DATA, TABLE OF

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_area_handle.htm)*\]*
                 *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* *{*type*|*(name)*}**}*
                 *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
                 *\[* WITH *{* *{**\[*UNIQUE*|*NON-UNIQUE*\]*
                           *{*KEY *{*comp1 comp2 ...*}**|*(keytab)*}**|**{*DEFAULT KEY*}**}**}*
                        *|* *{*EMPTY KEY*}*  *\]*
                 *\[*INITIAL SIZE n*\]*.

Effect

The statement CREATE DATA uses the addition tabkind OF to create an internal table. The meaning of the additions is the same as when declaring internal tables using the statement [DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_itab.htm), but with special rules for [CREATE DATA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcreate_data_existing.htm) if dobj is specified after LIKE. The explicit definition of the primary table key is only optional if a [standard table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") is created.

Whereas for DATA all specifications must be static, the following dynamic specifications are possible for CREATE DATA:

-   The line type after TYPE or the static type of a line flagged as a reference variable after TYPE REF TO can be specified as the content of a character-like data object called name, whereby the same rules apply as in the other variants of CREATE DATA.
-   For the definition of the primary table key a parenthesized internal table keytab can be specified instead of a static component comp1 comp2 ...:

... WITH $\[UNIQUE$|NON-UNIQUE$\] KEY (keytab) ...
The table keytab must have a character-like data type and, when the statement is executed, it must contain the name of a

-   A numeric data object can be specified for n after INITIAL SIZE.

Hints

-   The following restrictions apply to the definition of the table key, unlike to DATA:
    
    -   No [secondary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") can be defined in the statement CREATE DATA.
    -   The name [primary\_key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_primary_key.htm) and the addition [COMPONENTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_primary_key.htm) cannot be specified explicitly in the definition of the primary key.
    
    [Runtime type creation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") should be used instead to create dynamic table types with secondary keys. The same applies to the dynamic creation of an [empty table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_empty_key.htm), since the internal table keytab can only be used to define non-empty keys.
    
-   CREATE DATA cannot be used to create internal tables with [header lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenheader_line_glosry.htm "Glossary Entry").

Example

Creation and use of an anonymous hashed table. Since the type of the data reference variable is generic, which means it can only be dereferenced during an assignment to a field symbol.

DATA dref TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE ANY TABLE.
CREATE DATA dref TYPE HASHED TABLE OF scarr
                 WITH UNIQUE KEY carrid.
ASSIGN dref->\* TO <fs>.
SELECT \*
       FROM scarr
       INTO TABLE @<fs>.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Creating Tabular Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_tabular_data_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Tabular Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_tabular_data_abexa.htm)