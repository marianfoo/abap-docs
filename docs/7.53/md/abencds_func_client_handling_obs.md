  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abenddic_cds_table_functions.htm'\)) →  [ABAP CDS - Client Handling in CDS Table Functions](javascript:call_link\('abencds_func_client_handling.htm'\)) → 

ABAP CDS - Obsolete Client Handling in Table Functions

Before the annotation [@ClientHandling.type](javascript:call_link\('abencds_f1_function_annotations.htm'\)) with the values #CLIENT\_DEPENDENT and #CLIENT\_INDEPENDENT was introduced, the [client dependency](javascript:call_link\('abencds_func_client_handling.htm'\)) of a CDS table function was switched on and off using the annotation ClientDependent with the values true and false.

-   The annotation ClientDependent:true works like @ClientHandling.type:#CLIENT\_DEPENDENT.

-   The annotation ClientDependent:false works like @ClientHandling.type:#CLIENT\_INDEPENDENT.

Only the annotation @ClientHandling.type should now be used in new CDS table functions. The annotations @ClientHandling and @ClientDependent cannot be used together in the definition of a CDS table function. If neither of the annotations @ClientHandling.type and @ClientDependent is specified, the default value of @ClientHandling.type applies.