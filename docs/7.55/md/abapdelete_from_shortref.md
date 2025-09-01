  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  D

DELETE FROM - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdelete_cluster.htm)

Syntax

DELETE FROM *{* *{*MEMORY ID id*}*
            *|* *{*DATABASE      dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED MEMORY dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED BUFFER dbtab(ar) *\[*CLIENT cl*\]* ID id*}* *}*.

Effect

Deletes the [data cluster](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry") of the ID specified in id.

Additions

-   MEMORY
    Specifies a data cluster in the [ABAP memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_memory_glosry.htm "Glossary Entry").
    

-   DATABASE dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster in a database table dbtab, in the range ar and with a [client ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_identifier_glosry.htm "Glossary Entry") cl.
    

-   *{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster stored in an application buffer in the [shared memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.