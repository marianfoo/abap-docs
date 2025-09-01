  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  L

LOG-POINT - Short Reference

[Reference](javascript:call_link\('abaplog-point.htm'\))

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Effect

Defines a [logpoint](javascript:call_link\('abenlogpoint_glosry.htm'\) "Glossary Entry") to write a log entry.

Additions

-   ID group
    Assigns the logpoint to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") group, which controls its activation.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the values val1, val2, ... to the log.