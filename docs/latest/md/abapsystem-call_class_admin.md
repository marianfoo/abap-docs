  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYSTEM-CALL%20-%20Method%20Administration%20for%20the%20ABAP%20Class%20Library%2C%20ABAPSYSTEM-CALL_CLASS_ADMIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion%20for%20improvement:)

SYSTEM-CALL - Method Administration for the ABAP Class Library

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Variants:

[1\. SYSTEM-CALL CREATE CLASS c.](#!ABAP_VARIANT_1@1@)
[2\. SYSTEM-CALL CREATE METHOD m OF CLASS c INCLUDE INTO incl.](#!ABAP_VARIANT_2@2@)
[3\. SYSTEM-CALL QUERY CLASS c.](#!ABAP_VARIANT_3@3@)
[4\. SYSTEM-CALL QUERY METHOD m OF CLASS c INCLUDE INTO incl.](#!ABAP_VARIANT_4@4@)
[5\. SYSTEM-CALL DELETE CLASS c.](#!ABAP_VARIANT_5@5@)
[6\. SYSTEM-CALL DELETE METHOD m OF CLASS c.](#!ABAP_VARIANT_6@6@)
[7\. SYSTEM-CALL RENAME CLASS c NEW NAME FROM c2.](#!ABAP_VARIANT_7@7@)
[8\. SYSTEM-CALL RENAME METHOD m OF CLASS c NEW NAME FROM m2.](#!ABAP_VARIANT_8@8@)
[9\. SYSTEM-CALL QUERY METHOD INCLUDE FROM incl CLASS INTO c                                        METHOD INTO m.](#!ABAP_VARIANT_9@9@)

Effect

Administers the method includes belonging to a class. Is an interface to table TMDIR. Can be called from the C environment using ab\_MethodInclAdm().

Variant 1   

SYSTEM-CALL CREATE CLASS c.

Effect

A basic entry is created for class c.
Return Code

sy-subrc = 0:

Entry for class c successfully created.

Variant 2   

SYSTEM-CALL CREATE METHOD m OF CLASS c INCLUDE INTO incl.

Addition:

[... AS EXTENSION](#!ABAP_ONE_ADD@1@)

Effect

Creates a method entry for method m in class c. The program name of the method include is returned in incl.
Return Code

sy-subrc = 0:

Entry for method m in class c successfully created.

sy-subrc = 4:

Entry for method m in class c already exists.

sy-subrc = 8:

Overflow. Unable to create any more method entries for class c.

Addition   

... AS EXTENSION

Effect

If the optional addition AS EXTENSION is specified, the method is flagged as an enhancement method ([enhancement implementation element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry")).

Variant 3   

SYSTEM-CALL QUERY CLASS c.

Effect

The system checks whether there is a basic entry for class c.
Return Code

sy-subrc = 0:

Entry for class c exists.

sy-subrc = 4:

Entry for class c does not exist.

Variant 4   

SYSTEM-CALL QUERY METHOD m OF CLASS c INCLUDE INTO incl.

Additions:

[1\. ... NO DBLOCK](#!ABAP_ADDITION_1@1@)
[2\. ... NO EXTENSIONS](#!ABAP_ADDITION_2@2@)

Effect

The system checks whether a method entry exists for method m from class c. If it does, the program name of the related method include is returned in variable incl.
Return Code

sy-subrc = 0:

Entry for method m of class c exists.

sy-subrc = 4:

Entry for method m of class c does not exist.

Addition 1   

... NO DBLOCK

Effect

If the optional addition NO DBLOCK is specified, the system does not set an update lock on class c.

Addition 2   

... NO EXTENSIONS

Effect

If the optional addition NO EXTENSIONS is specified, the call only sets sy-subrc to 0 if the method searched for is not flagged as an enhancement method [enhancement implementation element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry")).

Variant 5   

SYSTEM-CALL DELETE CLASS c.

Effect

Deletes the basic entry and all method entries for class c.
Return Code

sy-subrc = 0:

All entries for class c deleted.

Variant 6   

SYSTEM-CALL DELETE METHOD m OF CLASS c.

Effect

Deletes the method entry for method m in class c.
Return Code

sy-subrc = 0:

Entry for method m in class c deleted.

sy-subrc = 4:

Entry for method m of class c does not exist.

Variant 7   

SYSTEM-CALL RENAME CLASS c NEW NAME FROM c2.

Effect

Renames the basic entry and method entries for class c using the name c2.
Return Code

sy-subrc = 0:

Entries for class c renamed as c2.

sy-subrc = 4:

Basic entry for class c2 already exists.

Variant 8   

SYSTEM-CALL RENAME METHOD m OF CLASS c NEW NAME FROM m2.

Effect

Renames the method entry m in class c using the new name m2.
Return Code

sy-subrc = 0:

Entry for method m from class c renamed as m2.

sy-subrc = 4:

Entry for method m2 in class c already exists.

sy-subrc = 8:

Entry for method m of class c does not exist.

Variant 9   

SYSTEM-CALL QUERY METHOD INCLUDE FROM incl CLASS INTO c METHOD INTO m.

Addition:

[... NO EXTENSIONS](#!ABAP_ONE_ADD@2@)

Effect

The system checks whether or not a method entry exists for the method specified in the include name incl. If so, the class name is returned in the variable c and the method name in m.
Return Code

sy-subrc = 0:

Method derived from include name incl exists.

sy-subrc = 4:

Class derived from include name incl does not exist.

sy-subrc = 8:

Method derived from include name incl does not exist.

Addition   

... NO EXTENSIONS

Effect

If the optional addition NO EXTENSIONS is specified, the call only sets sy-subrc to 0 if the method searched for is not flagged as an enhancement method [enhancement implementation element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry")).

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Basic entry for class c already exists.
    Runtime error: TMDIR\_CLASS\_ALREADY\_EXISTS
-   Cause: No basic entry for class c exists.
    Runtime error: TMDIR\_CLASS\_NOT\_EXISTS
-   Cause: A method entry with an method include number which is too large exists for class c.
    Runtime error: TMDIR\_TOO\_MANY\_RECORDS