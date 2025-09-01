  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Maximum%20Size%20of%20Dynamic%20Data%20Objects%2C%20ABENMEMORY_CONSUMPTION_2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Maximum Size of Dynamic Data Objects

In addition to the maximum memory size that the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") can request for [dynamic data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), their maximum size is limited by the following factors:

-   An upper limit for the number of places in strings or lines of internal tables results from the fact that 4 byte integers are used to address them internally and in ABAP statements, which limits them to 2147483647.
-   The size of strings and hashed tables is limited by the biggest memory block that can be requested in one piece. This is a maximum of 2 GB but is usually further limited using the [profile parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB. For strings, the value of the profile parameter corresponds directly to the maximum size that can be occupied. The maximum number of lines in hashed tables depends on the required size of the hash administration that must be stored there. Currently, it is calculated from the largest power of two that fits into the value of the profile parameter divided by 8. For example, if the profile parameter specifies 250 MB, a hashed table can contain a maximum of about 16 million entries (128 times 1024 to the power of two divided by 8).

The actual maximum size is generally smaller than specified by the above limits since the overall available memory is normally not only used by a string or an internal table.

If an operation with a dynamic data object exceeds its maximum size, an exception occurs:

-   For internal tables, such an exception is uncatchable and always results in a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"). There are different runtime errors for different situations, as for example [TSV\_TNEW\_PAGE\_ALLOC\_FAILED](https://launchpad.support.sap.com/#/notes/20527).
-   For strings, the exception is class-based and connected to exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE. The runtime error STRING\_SIZE\_TOO\_LARGE only occurs if the exception is not handled. After this exception is caught, the respective string contains the content it had directly before the exception. This is usually the content it had before the entire operation (statement, function). Exceptions from this rule are statements like [CONCATENATE LINES OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconcatenate.htm) or functions like [concat\_lines\_of](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconcatenation_functions.htm), which can change the string before the exception occurs.

Hints

-   If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.
-   It is strongly recommended that the content of a string after catching an exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE is regarded as undefined and that it is deleted as soon as possible.

Example

In the following DO loop of class CL\_DEMO\_STRING\_SIZE\_TOO\_LARGE, a string is concatenated with itself until it exceeds its maximum size and an exception occurs. After catching the exception, the byte-length of the string is determined before its content is deleted.

DATA(txt) = \`X\`.
TRY.
    DO.
      txt = txt && txt.
    ENDDO.
  CATCH cx\_sy\_string\_size\_too\_large INTO FINAL(exc).
    cl\_demo\_output=>display(
      |{ exc->get\_text( )
       }.\\nThe resulting string has a length of {
         xstrlen( cl\_abap\_codepage=>convert\_to(
                    source = txt
                    codepage = 'UTF-16' ) ) } bytes.| ).
    CLEAR txt.
ENDTRY.