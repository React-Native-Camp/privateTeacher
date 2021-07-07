BEGIN;

    INSERT INTO users
        (name, email,password,img,address,age,phone)
    VALUES
        ('Ahmed mustafa', 'ahmedmustafa@gmail.com', '12345678', 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV','Hebron','14','0567856543');
      
    COMMIT;