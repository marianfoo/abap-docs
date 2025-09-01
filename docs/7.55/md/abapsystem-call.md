---
title: "SYSTEM-CALL"
description: |
  This statement is intended solely for  Internal use within SAP Basis Development  Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups. Its use is subject to various restrictions, some of which may not be described in the documentation . This docum
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call.htm"
abapFile: "abapsystem-call.htm"
keywords: ["select", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "field-symbol", "abapsystem", "call"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

SYSTEM-CALL

This statement is intended solely for
\*\*\* Internal use within SAP Basis Development \*\*\*
Even within SAP Basis, it may be used only in programs within the ABAP+GUI dvelopment groups.
Its use is subject to various restrictions, some of which may not be described in the documentation . This documentation is intended for internal SAP use within the Basis development group ABAP+GUI.
Changes and further developments, which may be incompatible, can occur at any time without prior notice!

Hint

[kernel methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkernel_methods.htm) should be used instead of SYSTEM-CALL whenever possible.

Syntax Forms

[Saves addresses and sets field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_pointer.htm)
\- SYSTEM-CALL POINTER <f> TO   ptr.
\- SYSTEM-CALL POINTER <f> FROM ptr.

[Edits internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_itab.htm)
\- SYSTEM-CALL ITAB\_DELETE\_LIST TABLE itab1 INDEX-LIST itab2
                             *\[*NO-CHECK*\]* *\[*USING KEY key*\]*.
\- SYSTEM-CALL ITAB\_INFO TABLE itab1 OPCODE op
                                  *{*VALUE f*|*PROTOCOL itab2*}*.

[Method management for the ABAP class library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_class_admin.htm)
\- SYSTEM-CALL CREATE CLASS c.
\- SYSTEM-CALL CREATE METHOD m OF CLASS c INCLUDE INTO incl.
\- SYSTEM-CALL QUERY CLASS c.
\- SYSTEM-CALL QUERY METHOD m OF CLASS c INCLUDE INTO incl.
\- SYSTEM-CALL DELETE CLASS c.
\- SYSTEM-CALL DELETE METHOD m OF CLASS c.
\- SYSTEM-CALL RENAME CLASS c NEW NAME FROM c2.
\- SYSTEM-CALL RENAME METHOD m OF CLASS c NEW NAME FROM m2.
\- SYSTEM-CALL QUERY METHOD INCLUDE FROM incl CLASS INTO c
                                             METHOD INTO m.

[Object manager calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_oo.htm)
\- SYSTEM-CALL OBJMGR SET TRACELEVEL f1.
\- SYSTEM-CALL OBJMGR SET NODELETE MODE f1.
\- SYSTEM-CALL OBJMGR SET MS-MODE INCREMENTAL f1.
\- SYSTEM-CALL OBJMGR SET INITIAL TRIGGERLEVEL f1.
\- SYSTEM-CALL OBJMGR SET GC STEPTIME f1.
\- SYSTEM-CALL OBJMGR SET OVERALLOCATION FRACTION f1.
\- SYSTEM-CALL OBJMGR PERFORM GARBAGE COLLECTION.
\- SYSTEM-CALL OBJMGR PERFORM MARK.
\- SYSTEM-CALL OBJMGR CLONE f1 TO f2.
\- SYSTEM-CALL OBJMGR EQUAL f1 = f2 INTO f3.
\- SYSTEM-CALL OBJMGR GET STATE OF f1 INTO f2.
\- SYSTEM-CALL OBJMGR SET STATE OF f1 INTO f2.
\- SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF CLASS f2 INTO f3.
\- SYSTEM-CALL EVENTS GET NUM\_HANDLERS FOR f1 OF INST f2 INTO f3.

[RTTI calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_rtti.htm)
\- SYSTEM-CALL DESCRIBE ADMINISTRATION MODE f1 OF f2 INTO f3 f4 f5.
\- SYSTEM-CALL DESCRIBE NAVIGATION MODE f1 FROM f2 TO f3 f4 INTO f5 f6 f7.
\- SYSTEM-CALL DESCRIBE APPLIES f1 TO f2 RESULT f3.
\- SYSTEM-CALL DESCRIBE APPLIES f1 TO CLASS f2 RESULT f3.
\- SYSTEM-CALL DESCRIBE ELEMENTARY f1 INTO f2 f3 f4 f5 f6 f7 f8.
\- SYSTEM-CALL DESCRIBE REFERENCE f1 INTO f2 f3 f4 f5.
\- SYSTEM-CALL DESCRIBE STRUCTURE f1 INTO f2 f3 f4 f5 f6 f7.
\- SYSTEM-CALL DESCRIBE TABLE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10.
\- SYSTEM-CALL DESCRIBE CLASS f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14.
\- SYSTEM-CALL DESCRIBE INTERFACE f1 INTO f2 f3 f4 f5 f6 f7 f8 f9 f10 f11.

[CHECK calls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_check.htm)
\- SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C CLASS f2 METHOD f3 PARAMETER f4.
\- SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FUNCTION f2 PARAMETER f3.
\- SYSTEM-CALL CHECK f1 FOR SEQUENCE OF C FORM f2 PARAMETER f3.

[Nametab management](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_nametab.htm)
\- EXPORT NAMETAB h f ID id.
\- IMPORT NAMETAB h f ID id.

[Conversions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_convert.htm)
\- CONVERT ID id DATA dat
    ENCODING code
    ENDIAN endian
    IGNORE\_CERR error N n
    POSITION position
    REPLACEMENT rep
    LEN len
    BUFFER buf
    AUX aux
    TYPE type.

[Memory use of complex data structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsystem-call_memory.htm)
\- GET STORAGE COSTS OF dobj INTO struc
    *\[* IGNORING *\[*TABLE SHARING*\]* *|* *\[*REFERENCES*\]* *|* *\[*STRING SHARING*\]* *\]*.

Other Options
\- ASSIGN f TO fs TYPE t
\- BACKGROUND
\- C-DESTRUCTOR
\- C\_PROFILER
\- CLUSTER dbtab dbtab dbtab
\- DSTENC f
\- EXCEPTION exc TEXT INTO text
\- FIELD-ATTRIBUTES f1 f2 f3
\- FLUSH
\- FREE MODE f
\- GET\_STRING\_BY\_ALIAS LANGUAGE l ID id TEXT t
\- GET\_STRING\_BY\_ [GUID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenguid_glosry.htm "Glossary Entry") LANGUAGE l ID id TEXT t
\- GET\_TEXT\_BY\_ALIAS LANGUAGE l ID id NR n
\- GET\_TEXT\_BY\_GUID LANGUAGE l ID id NR n TEXT t
\- HELP f
\- ID id FIELD f
\- IGNORE\_CERR f
\- IMPORT SELECTIONS
\- INIT-TEXT c USING f PROGRAM prog
\- INITIALIZATION
\- INTERNAL MODE INTO f
\- INSTRUCTION TRACE ON USER f
\- INSTRUCTION TRACE OFF RESULT INTO itab
\- JAVA SCRIPT
\- KERNEL\_INFO f1 f2
\- LITERAL\_GET PROGRAM prog OFFSET off IS\_OFFSET f
\- LOAD LIST DESCRIPTION INTO itab
\- LOAD LISTLEVEL-STACK INTO itab
\- LOAD LIST PAGE DESCRIPTION *\[*INTO itab *\[*INDEX idx*\]**\]*
\- MODIFY MC\_OBJECT f1 f2
\- NEW MODE f
\- NEXT MODE
\- PLUGIN
\- POP LIST
\- POP LIST LEVEL
\- PREVIOUS MODE
\- PROCESS EVENT evt IN PROGRAM prog
\- PUSH LIST
\- PUSH LIST LEVEL
\- RABAX f
\- RESET-GPA
\- RESUME MODE f
\- RFC\_ID f1 RFC\_VALUE f2
\- RFC\_ID f1 RFC\_TABLE f2
\- RFC\_END
\- SET\_KERNEL\_INFO f1 f2
\- SET LIST MAIN PROGRAM prog
\- SNAP ( ID id FIELD f )
\- SOLID POINTER
    PREPARE f1 FROM f2 *|*
    COMPARE f1 TO f2   *|*
    MOVE    f1 FROM f2 *|*
    FREE    f          *|*
    VERIFY  f          *|*
    ASSIGN  f TO fs
\- SRCENC f
\- SSCR\_HELP\_INDEX f
\- STATE\_LIMIT
    SET *|*
    RESET
\- SUBMODE INTO f
\- SUPPRESS-GPA
\- UNSET PARAMETER ID f
\- WARNMSG\_GET msg
\- WEBRFC MODE f1 STATE f2