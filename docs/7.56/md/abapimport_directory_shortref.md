  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  I

IMPORT DIRECTORY - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_directory.htm)

Syntax

IMPORT DIRECTORY INTO itab
  FROM DATABASE dbtab(ar) *\[*TO wa*\]* *\[*CLIENT cl*\]* ID id.

Effect

Imports the table of contents of a [data cluster](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster_glosry.htm "Glossary Entry") into an internal table itab.

Additions

-   FROM DATABASE dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster stored in a database table dbtab in the area ar with the [client ID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_identifier_glosry.htm "Glossary Entry") cl.
-   ID id
    Specifies the ID id of the data cluster.
-   TO wa
    Specifies a work area wa for including details about the data cluster.