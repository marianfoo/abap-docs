  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  L

LOG-POINT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplog-point.htm)

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Effect

Defines a [logpoint](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogpoint_glosry.htm "Glossary Entry") to write a log entry.

Additions

-   ID group
    Assigns the logpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group, which controls its activation.
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
-   FIELDS val1 val2 ...
    Writes the values val1, val2, ... to the log.