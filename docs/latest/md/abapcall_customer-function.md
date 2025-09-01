  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Calls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_call_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20CUSTOMER-FUNCTION%2C%20ABAPCALL_CUSTOMER-FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL CUSTOMER-FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_customer_func_shortref.htm)

Obsolete Syntax

CALL CUSTOMER-FUNCTION function\_exit [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm).

Effect

This statement can be used in programs delivered by SAP. It includes the [function module exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_exit_glosry.htm "Glossary Entry") specified in function\_exit. The function module exit is a [customer exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomer_exit_glosry.htm "Glossary Entry"). In an SAP program, it enables a function module provided by SAP and implemented by the customer to be called.

The three-character name function\_exit must be specified directly and enclosed in single quotation marks ('). A function module exit is specified by SAP using the transaction SMOD and can be activated in customer systems using the transaction CMOD.

-   Preparation by SAP
    
    An empty or partially implemented function module must be assigned to the function module exit function\_exit using the transaction SMOD. The name of the function module consists of EXIT\_, the program name, which contains the statement CALL CUSTOMER-FUNCTION, and the three-character name in function\_exit. The interface of the function module is completely defined by SAP.
    
-   Activation in the Customer System
    
    The transaction CMOD enables the customer to implement the source code of the function module within an enhancement project and to activate the function module exit. If the function module exit is not activated, the statement CALL CUSTOMER-FUNCTION is ignored completely. If the function module is activated, the associated function module is called in the same way as the [general function module call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_general.htm).
    

Syntax and meaning of the [parameter\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_parameter.htm) for the assignment of the actual parameters to formal parameters and for the exception handling are the same as in a general function module call. It is not possible to fill the interface dynamically.

System Fields

If the function module exit is not active, sy-subrc retains its previous value. If the function module exit is active, sy-subrc is set as in [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_general.htm).

Hints

-   The execution of enhancements using transaction CMOD is obsolete. Instead, the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_framework_glosry.htm "Glossary Entry") should be used, which replaces function module exit calls with [BAdI method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbadi_method_glosry.htm "Glossary Entry") calls using [CALL BADI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_badi.htm).
-   Since it is not known in a calling program whether a function module exit is active, sy-subrc must be set to 0 explicitly so that a successful call can be simulated.