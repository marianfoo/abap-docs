  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXPORT, IMPORT, no_id, ABAPEXPORT_IMPORT_MEM_ID_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

EXPORT, IMPORT, no\_id

Obsolete Syntax

[EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) [parameter\_list](javascript:call_link\('abapexport_data_cluster_param.htm'\)) TO [MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) *\[*COMPRESSION *{*ON*|*OFF*}**\]*.
[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) [parameter\_list](javascript:call_link\('abapimport_parameterlist.htm'\)) FROM [MEMORY](javascript:call_link\('abapimport_medium.htm'\)) *\[*[conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))*\]*.

Effect

If the addition ID is not specified in the statements [EXPORT TO MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) or [IMPORT FROM MEMORY](javascript:call_link\('abapimport_medium.htm'\)), the statement EXPORT writes to an anonymous area of the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") and the statement IMPORT reads from this area.

Hint

This short form is extremely error-prone and forbidden in classes, since all EXPORT statements without an ID overwrite the same data cluster.