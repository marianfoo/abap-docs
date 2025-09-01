  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions.htm) →  [Exception Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexceptions_classes.htm) → 

Exception Texts

Each exception is assigned a text that can be given parameters using attributes and that describes the exception situation. This text is displayed in the [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry") of the runtime error if the exception is not handled. If the exception is handled in the program, the text can be read using the method GET\_TEXT of the interface IF\_MESSAGE, implemented by every exception class. If applicable, the long text can be read using the method GET\_LONG\_TEXT. A global exception class has a predefined exception text that has the same name as the exception class. This predefined text can be edited and further exception texts can be defined.

From a technical perspective, each exception text is defined using an identically named constant in the public visibility section of the exception class and this constant defines its properties. The instance constructor of an exception class has an input parameter TEXTID to which a constant like this can be passed when the exception is raised. This then determines the exception text. If the parameter is not passed, the predefined exception text with the same name as the exception class is used.

The exception texts of an exception class are usually defined by referencing [messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") in the table T100. In predefined system classes, OTR (Online Text Repository) texts can also be used.

-   [Messages as Exception Texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_t100.htm)

-   [Exception Texts for System Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_internal.htm)

Programming Guideline

[Using Messages as Exception Texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_guidl.htm "Guideline")

Notes

-   The names of the exception texts or the associated constants should be seen as keys of the texts available for an exception class. This means that when an exception is raised, only the exception class constants of the same name should be passed to the parameter TEXTID to identify the exception text.

-   The way in which the exception texts (namely the associated constants and the instance constructor) are edited depends to a large extent on whether [Class Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_builder_glosry.htm "Glossary Entry") in ABAP Workbench or the source code editor in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry") is used.

Continue
[Messages as Exception Texts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_t100.htm)
[Exception Texts for System Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexception_texts_internal.htm)