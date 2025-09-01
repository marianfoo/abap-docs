  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

FREE - no\_id

Obsolete Syntax

FREE MEMORY.

Effect

If the addition ID is not specified in the statement [FREE MEMORY](javascript:call_link\('abapfree_memory.htm'\)), then all data clusters are deleted from the ABAP memory.

Note

This short form is extremely error-prone and forbidden in classes, since a FREE statement without ID affects all data clusters.