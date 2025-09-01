  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

EXPORT, IMPORT, dbtab

Obsolete Syntax

[TABLES](javascript:call_link\('abaptables.htm'\)) dbtab.
...
[EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\))
       TO [DATABASE*|**{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* *\[*CLIENT cl*\]* ID id](javascript:call_link\('abapexport_data_cluster_medium.htm'\))
       *\[*COMPRESSION *{*ON*|*OFF*}**\]*.
...
[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\))
       FROM [DATABASE*|**{*SHARED MEMORY*}**|**{*SHARED BUFFER*}* *\[*CLIENT cl*\]* ID id](javascript:call_link\('abapimport_medium.htm'\))
       *\[*[conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))*\]*.

Effect

If the addition FROM wa or TO wa is not specified in exports or imports using the media database table or shared memory, the ABAP runtime environment attempts to transport the components between [SRTF2](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) and [CLUSTR](javascript:call_link\('abenexport_data_cluster_indx.htm'\)) of the [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") declared using TABLES dbtab. If the table work area is not found, these components are not transported.

Hints

-   In global classes, it is not possible to use table work areas anyway. In local classes of programs other than [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), the implicit mechanism is applied to any table work areas of their [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry").

-   The implicit use of table work areas is obsolete and hence the short forms shown here should no longer be used for data transports. Instead, it is recommended that FROM wa and TO wa are specified explicitly if the components between SRTF2 and CLUSTR are written or read.