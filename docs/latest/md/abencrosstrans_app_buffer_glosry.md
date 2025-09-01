  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20cross-transaction%20application%20buffer%2C%20ABENCROSSTRANS_APP_BUFFER_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

cross-transaction application buffer

Application buffer in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"). ABAP programs access cross-transaction application buffers by specifying [SHARED BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) or [SHARED MEMORY](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) as the medium with the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) for [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry"). The difference between the two types lies in the system behavior when the memory limit is reached.