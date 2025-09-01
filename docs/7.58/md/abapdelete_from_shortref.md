  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20FROM%2C%20ABAPDELETE_FROM_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE FROM - Short Reference

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
    Specifies a data cluster stored in an application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.