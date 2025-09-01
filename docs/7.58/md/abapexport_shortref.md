  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXPORT%2C%20ABAPEXPORT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXPORT - Short Reference

[Reference](javascript:call_link\('abapexport_data_cluster.htm'\))

Syntax

EXPORT *{* *{*p1 = dobj1 p2 = dobj2 ...*}*
       *|* *{*p1 FROM dobj1 p2 FROM dobj2 ...*}*
       *|* (ptab) *}*
    TO *{* *{* DATA BUFFER xstr *}*
       *|* *{* INTERNAL TABLE itab *}*
       *|* *{* MEMORY ID id *}*
       *|* *{* DATABASE      dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
       *|* *{* SHARED MEMORY dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*
       *|* *{* SHARED BUFFER dbtab(ar) *\[*FROM wa*\]* *\[*CLIENT cl*\]* ID id *}*  *}*
       *\[* COMPRESSION *{* ON *|* OFF *}* *\]*.

Effect

Saves data objects dobj1, dobj2, ... in a [data cluster](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

Additions   

-   [*{*p1 = dobj1 p2 = dobj2 ...*}**|**{*p1 FROM dobj1 p2 FROM dobj2 ...*}**|*(ptab)](javascript:call_link\('abapexport_data_cluster_param.htm'\))
    Defines the data cluster by specifying single parameters statically using p1 = dobj1 p2 = dobj2 ... or p1 FROM dobj1 p2 FROM dobj2 ... or by specifying them dynamically in an internal table ptab.
-   [DATA BUFFER xstr](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Saves the data cluster as a byte string in xstr.
-   [INTERNAL TABLE itab](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Saves the data cluster in an internal table itab.
-   [MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Saves the data cluster in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry").
-   [DATABASE dbtab(ar) *\[*CLIENT cl*\]*](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Saves the data cluster in a database table dbtab in the area ar under the [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") cl.
-   [*{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* dbtab(ar) *\[*CLIENT cl*\]*](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Saves the data cluster in an application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") addressed using the name of a database table dbtab, an area ar, and a client ID cl. These two alternatives have different displacement mechanisms.
-   [ID id](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Specifies the ID of the data cluster in id.
-   [FROM wa](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
    Specifies a work area wa to save information about the data cluster.
-   [COMPRESSION *{* ON *|* OFF *}*](javascript:call_link\('abapexport_data_cluster.htm'\))
    Specifies whether or not the data cluster is saved in compressed form.