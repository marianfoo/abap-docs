  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET node, ABAPGET_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

GET node - Short Reference

[Reference](javascript:call_link\('abapget-.htm'\))

Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Effect

Obsolete: Introduces an event block whose event is raised by a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") when data records of the node node are read.

Additions   

-   LATE
    Event if the logical database has read all the data records of a node node.
-   FIELDS f1 f2 ...
    Specifies which fields are read from the logical database.