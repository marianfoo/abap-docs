  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.20](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-620.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Classes%20and%20Methods%20in%20ABAP%20Release%206.20%2C%20ABENNEWS-620-CLASSES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

System Classes and Methods in ABAP Release 6.20

[1\. Class for Calculating with Time Stamps](#!ABAP_MODIFICATION_1@1@)
[2\. Class for Formatting Lists](#!ABAP_MODIFICATION_2@2@)
[3\. Error Handling of Exceptions](#!ABAP_MODIFICATION_3@3@)
[4\. Methods for Determining Type Properties](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Class for Calculating with Time Stamps

Class CL\_ABAP\_TSTMP has been introduced for calculating with [time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") in packed numbers.

Modification 2   

Class for Formatting Lists

Class CL\_ABAP\_LIST\_UTILITIES has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under System → List → Unicode Display. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (\> or <).

Modification 3   

Error Handling of Exceptions

Interfaces IF\_MESSAGE and IF\_SERIALIZABLE\_OBJECT have been added to class CX\_ROOT, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. The method GET\_LONGTEXT is used to provide the long text for an exception text.

Modification 4   

Methods for Determining Type Properties

Two new methods have been introduced in class CL\_ABAP\_DATADESCR for determining type properties at runtime ([RTTI](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrtti.htm)):

-   The method IS\_READ\_ONLY determines whether a reference data object is write-protected.
-   The method APPLIES\_TO\_DATA\_REF executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.