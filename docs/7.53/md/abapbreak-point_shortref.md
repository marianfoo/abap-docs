  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  B

BREAK-POINT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapbreak-point.htm)

Syntax

BREAK-POINT *\[* *{*ID group*}* *|* *{*log\_text*}* *\]*.

Effect

Defines a [breakpoint](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbreakpoint_glosry.htm "Glossary Entry") for branching to the ABAP Debugger.

Additions

-   ID group
    Assigns the breakpoint to a [checkpoint group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") group that controls its activation. Without this specification, a breakpoint is always active.
    
-   log\_text
    Specifies a supplementary text for the system log.