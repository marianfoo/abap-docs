  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and OLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole2.htm) → 

CREATE OBJECT, OLE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole_shortref.htm)

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Additions:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... QUEUE-ONLY](#!ABAP_ADDITION_2@2@)

Effect

This statement creates the automation object ole of the automation class class. The object ole must be of type ole2\_object, which is defined in ABAP Dictionary in the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") OLE2. The automation class class expects a character-like data object is expected that contains the name of the class.

The system automatically executes an authorization check if the column AUTH\_CHK in the DDIC database table TOLE contains the value "X" for the class. The authorization status can be checked with the function module AUTHORITY\_CHECK\_OLE.

System Fields

sy-subrc

Meaning

0

Automation object created.

1

Error in communication to the SAP GUI

2

Error in function call in the SAP GUI

3

Problems with memory allocation in the presentation layer.

Hints

-   For the declaration of ole, exactly the type ole2\_object must be specified. It is not sufficient to specify another type declared with a reference to ole2\_object.

-   An automation object ole created using CREATE OBJECT ole must also be released by using FREE OBJECT ole to avoid memory bottle necks and terminations of the application to be controlled.

-   CREATE OBJECT for OLE should not be confused with the statement of the same name in ABAP Objects.
    

Addition 1

... NO FLUSH

Effect

When using the addition NO FLUSH, calls from automation methods are collected in the automation buffer until the function module FLUSH (which is provided for this purpose) is called and the FREE OBJECT statement is passed or, at the most, until a change of [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). They are then passed to the automation server in the current presentation layer for asynchronous execution. Without this addition, the flush is executed and the pass takes place as soon as a statement that does not belong to the automation command set is reached. Note that in the ABAP Debugger, the return values of the individual automation statements are not available until after the pass to the presentation layer.

Addition 2

... QUEUE-ONLY

Effect

The addition QUEUE-ONLY specifies that, in flushes, the new object is not passed to the specified ABAP data object rc as a return code using methods called by CALL METHOD OF. In this case, the automation buffer can only contain the statements CREATE OBJECT, CALL METHOD, and GET PROPERTY using the addition QUEUE-ONLY. When executing the program in the ABAP Debugger, the return values are passed by default.

Example

In this example, the automation object app is created, which has access to all methods and attributes of the class APPLICATION in the MS Excel Library. This class contains methods with which, for example, an Excel document can be opened or copied.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.