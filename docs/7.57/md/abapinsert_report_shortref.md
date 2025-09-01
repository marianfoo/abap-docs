  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  I

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT REPORT, ABAPINSERT_REPORT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

INSERT REPORT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_report.htm)

Syntax

INSERT REPORT prog FROM itab
              *\[*MAXIMUM WIDTH INTO wid*\]*
              *{* *\[*KEEPING DIRECTORY ENTRY*\]*
              *|* *{* *\[*PROGRAM TYPE pt*\]*
                  *\[*FIXED-POINT ARITHMETIC fp*\]*
                  *\[*VERSION*|**{*UNICODE ENABLING*}* vs*\]* *}*
              *|* *\[*DIRECTORY ENTRY dir*\]* *}*.

Effect

Inserts the source code contained in the internal table itab as an ABAP program prog into the [repository](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_glosry.htm "Glossary Entry").

Additions   

-   MAXIMUM WIDTH INTO wid
    Returns the number of characters of the longest source code line passed in wid.
-   KEEPING DIRECTORY ENTRY
    Preserves the properties of an existing program.
-   PROGRAM TYPE pt
    The [program type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_type_glosry.htm "Glossary Entry") is specified by pt.
-   FIXED-POINT ARITHMETIC fp
    Defines fixed point arithmetic by specifying blank or X in fp.
-   VERSION vs
    Defines the [ABAP language version](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_versions.htm) by specifying the version ID in vs.
-   UNICODE ENABLING vs
    Obsolete: Works like VERSION vs.
-   DIRECTORY ENTRY dir
    The [program properties](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_property_glosry.htm "Glossary Entry") are specified by the entries in the structure dir of the type TRDIR.