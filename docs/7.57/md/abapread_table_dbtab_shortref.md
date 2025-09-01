  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ TABLE dbtab, ABAPREAD_TABLE_DBTAB_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

READ TABLE dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_dbtab.htm)

Syntax

READ TABLE dbtab *\[*WITH KEY key*\]*
                 *\[*SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}**\]*
                 *\[*VERSION vers*\]*.

Effect

Obsolete: Reads a single row from a database table or view dbtab.

Additions   

-   WITH KEY key
    Determines the search key using the content of the data object key. Otherwise, the content of the [table work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab is used.
-   SEARCH *{*FKEQ*|*FKGE*|*GKEQ*|*GKGE*}*
    Determines the search mode in the database table.
-   VERSION vers
    Specifies a different database table in vers.