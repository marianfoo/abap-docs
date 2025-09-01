---
title: "DATA - TABLE OF"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_shortref.htm) Syntax DATA itab  TYPE STANDARDSORTEDHASHED TABLE OF REF TO type  LIKE STANDARDSORTEDHASHED TABLE OF dobj  tabkeys(https://help.sap.com/d
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_itab.htm"
abapFile: "abapdata_itab.htm"
keywords: ["select", "insert", "do", "try", "data", "types", "internal-table", "abapdata", "itab"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata.htm) → 

DATA - TABLE OF

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_shortref.htm)

Syntax

DATA itab *{* *{*TYPE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*STANDARD*\]**|*SORTED*|*HASHED TABLE OF dobj*}* *}*
          *\[*[tabkeys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_keydef.htm)*\]*
          *\[*INITIAL SIZE n*\]*
          [*\[*VALUE IS INITIAL*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm)
          [*\[*READ-ONLY*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm).

Effect

This statement defines an internal table. The definition of the row type, the table category ([STANDARD TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_tabkind.htm), [SORTED TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_tabkind.htm), or [HASHED TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_tabkind.htm)), and the initial memory size [INITIAL SIZE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm) matches the definition of table categories in the section [TYPES - TABLE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_itab.htm) exactly. Using DATA, these additions create a bound table type. The generic types ANY TABLE and INDEX TABLE cannot be used with DATA.

[tabkeys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_keydef.htm) is used to define the [table keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_key_glosry.htm "Glossary Entry") of the internal table, which, unlike data types, cannot be generic.

Notes

-   When an internal table is created as a data object, only the administration entry for an internal table is generated. The actual table rows are not inserted until runtime.
    
-   When an internal table is defined, the start value after the addition [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_options.htm) must be IS INITIAL.
    
-   Several obsolete variants for declaring standard tables exist and are described under [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab_declare_obsolete.htm). In particular, note the obsolete use of the additions [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_header_line.htm) and [OCCURS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_occurs.htm).
    

Example

Declares an internal hashed table. The row type corresponds to the structure of the database table SPFLI. Two key fields are defined for the primary table key. The other statements demonstrate how the table is filled with rows from database table SPFLI and how a row is read.

DATA: spfli\_tab TYPE HASHED TABLE OF spfli
                WITH UNIQUE KEY carrid connid,
      spfli\_wa  LIKE LINE OF spfli\_tab.
SELECT \*
       FROM spfli
       WHERE  carrid = 'LH'
       INTO TABLE @spfli\_tab.
spfli\_wa = spfli\_tab\[ KEY primary\_key
                          carrid =  'LH' connid =  '0400' \].
...

Continue
[DATA - tabkeys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdata_keydef.htm)