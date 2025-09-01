  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-620.htm) → 

System Classes and Methods in Release 6.20

[1\. Class for calculating with time stamps](#!ABAP_MODIFICATION_1@1@)
[
2\. Class for formatting lists](#!ABAP_MODIFICATION_2@2@)
[
3\. Error handling of exceptions](#!ABAP_MODIFICATION_3@3@)
[
4\. Methods for determining type attributes](#!ABAP_MODIFICATION_4@4@)

Modification 1

Class for Calculating with Time Stamps

Class CL\_ABAP\_TSTMP has been introduced for calculating with [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry").

Modification 2

Class for Formatting Lists

Class CL\_ABAP\_LIST\_UTILITIES has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under System → List → Unicode Display. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (\> or <).

Modification 3

Error Handling of Exceptions

Interfaces IF\_MESSAGE and IF\_SERIALIZABLE\_OBJECT have been added to class CX\_ROOT, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. Using method GET\_LONG\_TEXT, the long text for an exception text is provided.

Modification 4

Methods for Determining Type Attributes

Two new methods have been introduced in class CL\_ABAP\_DATADESCR for determining type attributes at runtime ([RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrtti.htm)):

-   Method IS\_READ\_ONLY determines whether a reference data object is write-protected.
    
-   Method APPLIES\_TO\_DATA\_REF executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.