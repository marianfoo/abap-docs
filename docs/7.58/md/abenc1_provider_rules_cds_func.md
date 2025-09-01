  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Providers](javascript:call_link\('abenc1_provider_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C1%20Contract%20Rules%20for%20Providing%20CDS%20Scalar%20Functions%2C%20ABENC1_PROVIDER_RULES_CDS_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

C1 Contract Rules for Providing CDS Scalar Functions

A provider of a [CDS scalar function](javascript:call_link\('abencds_scalar_function_glosry.htm'\) "Glossary Entry") must obey the following rules:

-   [CDS Scalar Function Definition](javascript:call_link\('abencds_dsfd_glosry.htm'\) "Glossary Entry")
    
    Before release
    
    -   If a parameter of a scalar function definition is typed using a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or a [CDS simple type](javascript:call_link\('abencds_simple_type_glosry.htm'\) "Glossary Entry"), the respective DDIC data element or CDS simple type must be classified with the C1 contract.
    
    After release:
    
    -   The name of the scalar function definition must not be changed.
    -   The parameter interface must remain stable. This means that parameters must not be added or removed, parameter names must not be changed and their order must not be changed. The data types of parameters must not be changed incompatibly. In particular, the following rules apply:
        
        \- The typing of an input parameter or of the return parameter can be changed under the condition that the data type remains the same. For example, a built-in ABAP Dictionary data type can be changed into a CDS simple type of the same data type.
        
        \- The typing of an input parameter can be changed from a built-in data type into a generic data type under the condition that the scope of the generic data type includes the original built-in data type. The other way around, from a generic data type to a built-in data type, is not allowed.
        
-   [CDS scalar function implementation reference](javascript:call_link\('abencds_dsfi_glosry.htm'\) "Glossary Entry")
    
    Before release:
    
    -   The scalar function definition to which the implementation reference refers must be classified with the C1 contract.
    -   The [AMDP function implementation](javascript:call_link\('abenamdp_function_method_glosry.htm'\) "Glossary Entry") that implements the scalar function in question must exist.
    
    After release:
    
    -   The name of the scalar function implementation reference must not be changed.
    -   The type of implementation, that is, the runtime environment to which the scalar function in question is bound, must not be changed.