  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmemory_consumption.htm) → 

Maximum Size of Dynamic Data Objects

In addition to the maximum memory size that the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") can request for [dynamic data objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), their maximum size is limited by the following factors:

-   An upper limit for the number of places in strings or lines of internal tables results from the fact that 4 byte integers are used to address them internally and in ABAP statements, which limits them to 2147483647.

-   The size of strings and hashed tables is limited by the biggest memory block that can be requested in one piece. This is a maximum of 2 GB but is usually further limited using the [profile parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB. For strings, the value of the profile parameter corresponds directly to the maximum size that can be occupied. The maximum number of lines in hashed tables depends on the required size of the hash administration that must be stored there. Currently, it is calculated from the largest power of two that fits into the value of the profile parameter divided by 8. For example, if the profile parameter specifies 250 MB, a hashed table can contain a maximum of about 16 million entries (128 times 1024 to the power of two divided by 8).

The actual maximum size is generally smaller than specified by the above limits since the overall available memory is normally not only used by a string or an internal table.

If an operation with a dynamic data object exceeds its maximum size, an exception occurs:

-   For internal tables, such an exception is uncatchable and always results in a [runtime error](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenruntime_error_glosry.htm "Glossary Entry"). There are different runtime errors for different situations.

-   For strings, the exception is class-based and connected to exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE. The runtime error STRING\_SIZE\_TOO\_LARGE only occurs if the exception is not handled. After this exception is caught, the respective string contains the content it had directly before the exception. This is usually the content it had before the entire operation (statement, function). Exceptions from this rule are statements like [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconcatenate.htm) or functions like [concat\_lines\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconcatenation_functions.htm), which can change the string before the exception occurs.

Hints

-   If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.

-   It is strongly recommended to regard the contents of a string after catching an exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE as undefined and to delete it as soon as possible.

Example

In the following DO loop of program DEMO\_STRING\_SIZE\_TOO\_LARGE, a string is concatenated with itself until it exceeds its maximum size and an exception occurs. After catching the exception, the byte-length of the string is determined before its contents is deleted.

DATA(txt) = \`X\`.
TRY.
    DO.
      txt = txt && txt.
    ENDDO.
  CATCH cx\_sy\_string\_size\_too\_large INTO DATA(exc).
    cl\_demo\_output=>display(
      |{ exc->get\_text( )
       }.\\nThe resulting string has a length of {
         xstrlen( cl\_abap\_codepage=>convert\_to(
                    source = txt
                    codepage = 'UTF-16' ) ) } bytes.| ).
    CLEAR txt.
ENDTRY.