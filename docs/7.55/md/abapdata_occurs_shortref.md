  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  D

DATA, OCCURS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_occurs.htm)

Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          *\[*WITH HEADER LINE*\]*.

Effect

Obsolete: Declares a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [standard key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_key_glosry.htm "Glossary Entry") and the initial memory requirement n.

Additions

-   TYPE
    Defines the line type with a reference to a data type.
    

-   LIKE
    Defines the line type with a reference to a data object.
    

-   REF TO
    Creates the line type as a reference type.
    

-   [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_header_line.htm)
    Defines a header line with the same name.