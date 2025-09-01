  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  L

LOOP AT dbtab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_dbtab.htm)

Syntax

LOOP AT dbtab *\[*VERSION vers*\]*.
  ...
ENDLOOP.

Effect

Obsolete: Reads multiple rows of a database table or view dbtab in a loop. The content of the [table work area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab is used as the search key.

Addition

-   VERSION vers
    Specifies a different database table in vers.