  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

System Classes and Methods in Release 6.20

[1\. Class for Calculating with Time Stamps](#!ABAP_MODIFICATION_1@1@)
[2\. Class for Formatting Lists](#!ABAP_MODIFICATION_2@2@)
[3\. Error Handling of Exceptions](#!ABAP_MODIFICATION_3@3@)
[4\. Methods for Determining Type Attributes](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Class for Calculating with Time Stamps

Class CL\_ABAP\_TSTMP has been introduced for calculating with [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") in packed numbers.

Modification 2   

Class for Formatting Lists

Class CL\_ABAP\_LIST\_UTILITIES has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under System → List → Unicode Display. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (\> or <).

Modification 3   

Error Handling of Exceptions

Interfaces IF\_MESSAGE and IF\_SERIALIZABLE\_OBJECT have been added to class CX\_ROOT, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. The method GET\_LONGTEXT is used to provide the long text for an exception text.

Modification 4   

Methods for Determining Type Attributes

Two new methods have been introduced in class CL\_ABAP\_DATADESCR for determining type attributes at runtime ([RTTI](javascript:call_link\('abenrtti.htm'\))):

-   The method IS\_READ\_ONLY determines whether a reference data object is write-protected.
-   The method APPLIES\_TO\_DATA\_REF executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.