  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

GET node - Quick reference

[Reference](javascript:call_link\('abapget-.htm'\))

Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Effect

Obsolete: Introduces an event block whose event is triggered by a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") when data records of the node node are read.

Additions

-   LATE
    Event if the logical database has read all the data records of a node node.
    
-   FIELDS f1 f2 ...
    Specifies which fields are read from the logical database.