  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  L

LOOP AT dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_dbtab.htm)

Syntax

LOOP AT dbtab *\[*VERSION vers*\]*.
  ...
ENDLOOP.

Effect

Obsolete: Reads multiple rows of a database table or view dbtab in a loop. The content of the [table work area](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_work_area_glosry.htm "Glossary Entry") dbtab is used as the search key.

Addition

-   VERSION vers
    Specifies a different database table in vers.