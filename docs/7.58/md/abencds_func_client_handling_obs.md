  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abencds_table_functions.htm'\)) →  [ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Obsolete%20Client%20Handling%20in%20Table%20Functions%2C%20ABENCDS_FUNC_CLIENT_HANDLING_OBS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion%20for%20improvement:)

ABAP CDS - Obsolete Client Handling in Table Functions

Before the annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT was introduced, the [client dependency](javascript:call_link\('abencds_func_client_handling.htm'\)) of a CDS table function was switched on and off using the annotation ClientDependent with the values true and false.

-   The annotation ClientDependent:true works like @ClientHandling.type:#CLIENT\_DEPENDENT.
-   The annotation ClientDependent:false works like @ClientHandling.type:#CLIENT\_INDEPENDENT.

Only the annotation @ClientHandling.type should now be used in new CDS table functions. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.