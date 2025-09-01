  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, OCCURS, ABAPDATA_OCCURS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

DATA, OCCURS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_occurs.htm)

Syntax

DATA itab *{* *{*TYPE *\[*REF TO*\]* type*}*
          *|* *{*LIKE *\[*REF TO*\]* dobj*}* *}* OCCURS n
          *\[*WITH HEADER LINE*\]*.

Effect

Obsolete: Declares a [standard table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a [standard key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry") and the initial memory requirement n.

Additions   

-   TYPE
    Defines the line type with a reference to a data type.
-   LIKE
    Defines the line type with a reference to a data object.
-   REF TO
    Creates the line type as a reference type.
-   [WITH HEADER LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_header_line.htm)
    Defines a header line with the same name.