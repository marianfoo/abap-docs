  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Exception Classes](javascript:call_link\('abenexceptions_classes.htm'\)) →  [Exception Texts](javascript:call_link\('abenexception_texts.htm'\)) → 

Exception Texts for System Classes

This function is for internal use only.
Do not use it in application programs.

If an exception class does not implement the interface IF\_T100\_MESSAGE, texts stored in OTR (Online Text Repository) are used as exception texts. These texts can be defined with any number of placeholders. Each placeholder is represented by the name of an attribute of the exception class, which is enclosed by the "&" characters. When the exception is raised, the placeholders are replaced by the content of the attributes. The maintenance of exception texts is only possible in one tool:

-   Any exception texts can be defined on the Texts tab in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") in the ABAP Workbench. When saved, they are stored under a [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in the OTR. For each exception text, the Class Builder creates an identically named constant with the data type SOTR\_CONC from the ABAP Dictionary, which contains the UUID and generates an appropriate instance constructor.

-   The [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") do not support any exception texts from OTR. No exception texts can be defined for the OTR and no UUIDs are created.

The input parameter TEXTID of the instance constructor has the data type SOTR\_CONC. When an exception with these exception texts is raised, a UUID that identifies a text from OTR can be passed to the constructor. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed, which selects a text defined for the exception. The attributes assigned to the placeholders of the text can be supplied with values using the input parameters of the same name of the instance constructor.

Hints

-   OTR texts should only occur in predefined exception classes for system exceptions and should not be used in self-defined exception classes. One example are the predefined [exception classes for ABAP statements](javascript:call_link\('abenabap_exception_classes.htm'\)).

-   An exception text from the OTR is visible and can be edited on the Texts tab of the Class Builder, but the actual reference of the class to the text is created by the UUID that is stored in the identically named constant.

-   From a technical perspective, any UUID that specifies any text from OTR can also be passed to the input parameter TEXTID of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts.

-   If the implementation of the interface IF\_T100\_MESSAGE is deleted from an existing exception class using [messages as exception texts](javascript:call_link\('abenexception_texts_t100.htm'\)), the instance constructor can be modified using the function Utilities → Clean Up → Constructor in Class Builder in ABAP Workbench.