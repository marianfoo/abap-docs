  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DELETE FROM - Quick reference

[Reference](javascript:call_link\('abapdelete_cluster.htm'\))

Syntax

DELETE FROM *{* *{*MEMORY ID id*}*
            *|* *{*DATABASE      dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED MEMORY dbtab(ar) *\[*CLIENT cl*\]* ID id*}*
            *|* *{*SHARED BUFFER dbtab(ar) *\[*CLIENT cl*\]* ID id*}* *}*.

Effect

Deletes the [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") of the ID specified in id.

Additions

-   MEMORY
    Specifies a data cluster in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").
    
-   DATABASE dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster in a database table dbtab, in the range ar and with a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") cl.
    
-   *{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*
    Specifies a data cluster stored in an application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.