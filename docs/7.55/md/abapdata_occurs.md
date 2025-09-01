  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_declare_obsolete.htm) → 

DATA, OCCURS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_occurs_shortref.htm)

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_header_line.htm).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_itab.htm) statement for the declaration of a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_header_line.htm) is obsolete