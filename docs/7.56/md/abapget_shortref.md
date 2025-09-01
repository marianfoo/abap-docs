  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

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