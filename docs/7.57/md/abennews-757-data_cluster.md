  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.57](javascript:call_link\('abennews-757.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Clusters in Release 7.57, ABENNEWS-757-DATA_CLUSTER, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Data Clusters in Release 7.57

Modification

Import of Type n into Type c

The statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) now allows assignments of data of type [n to data objects of type c](javascript:call_link\('abapimport_parameterlist.htm'\)) if they have the same length. This change might lead to incompatible behavior if handling of the former exception leads to different results than the new behavior.