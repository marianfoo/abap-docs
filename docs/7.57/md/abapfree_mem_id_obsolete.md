  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE, no_id, ABAPFREE_MEM_ID_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

FREE, no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](javascript:call_link\('abapfree_memory.htm'\)), all data clusters are deleted from the ABAP memory.

Hint

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.