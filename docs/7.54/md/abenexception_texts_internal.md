  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_classes.htm) →  [Exception Texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts.htm) → 

Exception Texts for System Classes

This function is for internal use only.
Do not use it in application programs.

If an exception class does not implement the interface IF\_T100\_MESSAGE, texts stored in OTR (Online Text Repository) are used as exception texts. These texts can contain any number of placeholders. Each placeholder is represented by the name of an attribute from the exception class, which is enclosed by "&" characters. When the exception is raised, the placeholders are replaced by the content of the attributes. Exception texts can only be edited in one tool:

-   Any exception texts can be defined on the Texts tab in [Class Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_builder_glosry.htm "Glossary Entry") in ABAP Workbench. When saved, they are stored under a [UUID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuuid_glosry.htm "Glossary Entry") in OTR. For each exception text, Class Builder creates an identically named constant with the data type SOTR\_CONC from ABAP Dictionary. This constant contains the UUID and generates an appropriate instance constructor.

-   [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") do not support any exception texts from OTR. No exception texts can be defined for OTR and no UUIDs are created.

The input parameter TEXTID of the instance constructor has the data type SOTR\_CONC. When an exception with these exception texts is raised, a UUID that identifies a text from OTR can be passed to the constructor. It is strongly recommended that only the constants that exist in the class for the predefined exception texts are passed. This selects a predefined text for the exception. The attributes assigned to the placeholders of the text can be assigned values using the input parameters of the same name of the instance constructor.

Notes

-   OTR texts should only occur in predefined exception classes for system exceptions and should not be used in self-defined exception classes. One example are the predefined [exception classes for ABAP statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exception_classes.htm).

-   An exception text from OTR can be displayed and edited on the Texts tab in Class Builder, but the reference between the class and the text is made by the UUID saved in the identically named constant.

-   From a technical perspective, any UUID that specifies any text from OTR can also be passed to the input parameter TEXTID of the instance constructor. This is strongly discouraged, however, because an exception should only be raised with specific texts.

-   If the implementation of the interface IF\_T100\_MESSAGE is deleted from an existing exception class using [messages as exception texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_t100.htm), the instance constructor can be modified using the function Utilities → Clean Up → Constructor in Class Builder in ABAP Workbench.