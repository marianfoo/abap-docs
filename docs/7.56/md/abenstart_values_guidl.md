  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrobust_abap_gdl.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_type_obj_gdl.htm) → 

Start Values

Background

If you declare a data object with the statement DATA, you can use the addition [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdata_options.htm) to set a value, with which the data object is filled when it is created. If the addition VALUE is not used, the system uses the type-dependent initial value. If the statement CONSTANTS is used, the addition VALUE must always be specified. If the type-dependent initial value is required here, this can be achieved using the addition VALUE IS INITIAL. The addition [DEFAULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_parameters.htm) for input parameters of methods is a further option for start values.

If the specified start value does match the type and length of the data object, the value is converted when the program is generated.

Rule

Start values must match the data type of the data object

Only use the addition VALUE to enter start values that exactly match the data type of the declared data object in terms of type, content, and length.

Details

The start value cannot always be specified in a type-compliant way, since ABAP does not support type-compliant [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenliterals_guidl.htm "Guideline") for all possible data types. In all cases where a conversion cannot be avoided, choose the content of literals specified as start values so that the actual value meets the requirements when the source code is read.

Hint

If a start value cannot be converted to the data type of the data object, no syntax error occurs and program generation is canceled at activation time instead. Non-convertible start values for input parameters of methods, in fact, are not detected until the method is called. This can only occur, however, when literals are specified.

Bad Example

The average reader may well expect the constant high\_noon in the following source code to contain the value 120000. However, the constant actually contains the value 092000, because the value of the numeric literal refers to the number of seconds. This means 12,000 seconds is actually the time 09:20 on the following day.

CONSTANTS high\_noon TYPE t VALUE 120000.

Good Example

The following source code corrects the above example by replacing the numeric literal with a text field literal. Now the constant high\_noon contains the expected value 120000.

CONSTANTS high\_noon TYPE t VALUE '120000'.