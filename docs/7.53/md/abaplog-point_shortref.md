  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  L

LOG-POINT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplog-point.htm)

Syntax

LOG-POINT ID group
          *\[*SUBKEY sub*\]*
          *\[*FIELDS val1 val2 ...*\]*.

Effect

Defines a [logpoint](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogpoint_glosry.htm "Glossary Entry") to write a log entry.

Additions

-   ID group
    Assigns the logpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group, which controls its activation.
    
-   SUBKEY sub
    Controls the summarization of the log using a subkey sub.
    
-   FIELDS val1 val2 ...
    Writes the values val1, val2, ... to the log.