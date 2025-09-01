  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_declarations.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab_declare_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, OCCURS, ABAPDATA_OCCURS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestio
n for improvement:)

DATA, OCCURS

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_occurs_shortref.htm)

Obsolete Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          [*\[*WITH HEADER LINE*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm).

Effect

This statement is forbidden in classes. It has exactly the same function as the following [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_itab.htm) statement for the declaration of a [standard table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") and is replaced by this:

DATA itab *{* *{*TYPE STANDARD TABLE OF *\[*REF TO*\]* type*}*
          *|* *{*LIKE STANDARD TABLE OF *\[*REF TO*\]* dobj*}* *}*
          WITH NON-UNIQUE DEFAULT KEY
          INITIAL SIZE n
          *\[*WITH HEADER LINE*\]*.

The use of the addition [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm) is obsolete